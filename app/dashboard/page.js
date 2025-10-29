import {
    Building2,
    FileText,
    GraduationCap,
    PlusCircle,
    Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { departments } from "../data/departments";
import { faculty_teachers } from "../data/faculty";
import { notices } from "../data/notices";

const AdminDashboard = () => {
    const totalFaculty = faculty_teachers.length;
    const totalDepartments = departments.length;
    const totalNotices = notices.length;
    const totalStudents = 150; // Placeholder data

    const recentNotices = notices.slice(0, 5);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Admin Dashboard
                </h1>
                <div className="flex items-center space-x-2">
                    <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        <Link href="/dashboard/add-teacher">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Teacher
                        </Link>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Notice
                    </Button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Total Students
                        </CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {totalStudents}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            +5% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Faculty Members
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {totalFaculty}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            +2 new members this year
                        </p>
                    </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Departments
                        </CardTitle>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {totalDepartments}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            All departments active
                        </p>
                    </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Active Notices
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {totalNotices}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {notices.filter((n) => new Date(n.date) > Date.now() - 7 * 24 * 60 * 60 * 1000).length} new this week
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Notices Table */}
            <Card className="dark:bg-gray-800">
                <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">
                        Recent Notices
                    </CardTitle>
                    <CardDescription>
                        A list of the most recent announcements.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="dark:text-gray-300">
                                    Title
                                </TableHead>
                                <TableHead className="dark:text-gray-300">
                                    Date
                                </TableHead>
                                <TableHead className="text-right dark:text-gray-300">
                                    Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentNotices.map((notice) => (
                                <TableRow key={notice.id}>
                                    <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                                        {notice.title}
                                    </TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-400">
                                        {notice.date}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {notice.new && (
                                            <Badge className="bg-green-100 text-green-700">
                                                New
                                            </Badge>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminDashboard;
