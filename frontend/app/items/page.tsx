import Table from "@/app/ui/components/table";
import { getInventory } from "@/app/lib/data";

export default async function() {
    const items = await getInventory();
    
    return <div>
        <Table items={items} />
    </div>
}