"use client"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Modal } from "../ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"
export const StoreModal = () => {
    const storeModal = useStoreModal()
    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Store Name</Label>
                        <Input id="name" placeholder="E-commerce" />
                    </div>
                </div>
            </div>
        </Modal>
    );
}