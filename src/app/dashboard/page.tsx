import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import StatusDropdown from "./StatusDropdown";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const orders = [
    {
      shippingAdress: { name: "Mohammad" },
      user: {
        email: "mohammadsoltani138@gmail.com",
      },
      createAt: "2024/06/29",
      amount: 21,
    },
    {
      shippingAdress: { name: "Bahram" },
      user: {
        email: "tandt@gmail.com",
      },
      createAt: "2024/08/21",
      amount: 18,
    },
    {
      shippingAdress: { name: "Mohammad" },
      user: {
        email: "hichkas2002Mohammad@gmail.com",
      },
      createAt: "2024/08/05",
      amount: 14,
    },
  ];
  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }
  const THIS_WEEK = 173.68;
  const WEEKLY_GOAL = 500;
  const THIS_MONTH = 1500;
  const MONTHLY_GOAL = 2500;
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Last week</CardDescription>
                <CardTitle className="text-4xl ">
                  {formatPrice(THIS_WEEK)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  of {formatPrice(WEEKLY_GOAL)} goal
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={(THIS_WEEK / WEEKLY_GOAL) * 100} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Last month</CardDescription>
                <CardTitle className="text-4xl ">
                  {formatPrice(THIS_MONTH)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  of {formatPrice(MONTHLY_GOAL)} goal
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={(THIS_MONTH / MONTHLY_GOAL) * 100} />
              </CardFooter>
            </Card>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Incoming orders</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Purchase date
                </TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((elem) => (
                <TableRow key={elem.amount} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      {elem.shippingAdress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {elem.user.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <StatusDropdown
                      id="cm1buessf0002x8kiir687dax"
                      orderStatus="shipped"
                    />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {elem.createAt}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatPrice(elem.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
