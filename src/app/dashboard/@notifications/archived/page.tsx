import Card from "@/app/components/card";
import Link from "next/link";

const NotificationArchived = () => {
  console.log("Archived");
  return (
    <Card>
      <div>Notification Archived</div>
      <Link href="/dashboard">Default</Link>
    </Card>
  );
};

export default NotificationArchived;
