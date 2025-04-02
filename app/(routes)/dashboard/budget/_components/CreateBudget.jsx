"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbconfig"; 
import { toast } from "sonner"; 

function CreateBudget() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [emojiIcon, setEmojiIcon] = useState("😄");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // ✅ Control dialog state
  const { user } = useUser();

  const onCreateBudget = async () => {
    if (!name || !amount || !user?.primaryEmailAddress?.emailAddress) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await db.insert(Budgets).values({
        name,
        amount: Number(amount), 
        createdBy: user.primaryEmailAddress.emailAddress,
        icon: emojiIcon,
      });

      toast.success("New Budget Created! 🎉");
      
      // ✅ Close dialog after success
      setOpenDialog(false);

      // ✅ Reset state
      setName("");
      setAmount("");
      setEmojiIcon("😄");
    } catch (error) {
      console.error("Error creating budget:", error);
      toast.error("Failed to create budget.");
    }
  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}> {/* ✅ Controlled Dialog */}
        <DialogTrigger asChild>
          <div 
            className="bg bg-slate-100 p-10 rounded-md flex flex-col items-center border-2 border-dashed cursor-pointer hover:shadow-md"
            onClick={() => setOpenDialog(true)} // ✅ Open dialog on click
          >
            <h2 className="text-3xl">+</h2>
            <h2>Create new budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Budget</DialogTitle>
            <div>
              <div className="mt-5">
                <Button variant="outline" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>
                  {emojiIcon}
                </Button>
              </div>

              {openEmojiPicker && (
                <div>
                  <EmojiPicker onEmojiClick={(emoji) => setEmojiIcon(emoji.emoji)} />
                </div>
              )}

              <div className="mt-2">
                <h2 className="text-black font-medium my-1">Budget Name</h2>
                <Input value={name} placeholder="e.g Home decor" onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="mt-2">
                <h2 className="text-black font-medium my-1">Budget Amount</h2>
                <Input type="number" value={amount} placeholder="e.g 5000$" onChange={(e) => setAmount(e.target.value)} />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button disabled={!name || !amount} onClick={onCreateBudget} className="mt-5 w-full">
              Create Budget
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
