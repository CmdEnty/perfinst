import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Staff from "./scenes/staff";
import Student from "./scenes/student";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import PendingStudents from "./scenes/pendingStudents";
import AddStudentForm from "./scenes/addStudent";
import DesignationAccordions from "./scenes/designation";
import StudentView from "./scenes/studentView";
import Course from "./scenes/course";
import CourseView from "./scenes/courseView";
import Emails from "./scenes/emails";
import Salary from "./scenes/salary";
import SalaryHistoryView from "./scenes/salaryHistoryView";
import Expenditure from "./scenes/expenditure";
import UnitsPage from "./scenes/units";
import ClassessPage from "./scenes/classes";
import DepartmentsPage from "./scenes/department";
import AddStaff from "./scenes/addStaff";
import StaffView from "./scenes/staffView";
import FeesPage from "./scenes/fees";
import Examinations from "./scenes/examination";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/students" element={<Student />} />
                <Route path="/pendingStudents" element={<PendingStudents />} />
                <Route path="/addStudent" element={<AddStudentForm />} />
                <Route
                  path="/designation"
                  element={<DesignationAccordions />}
                />
                <Route path="/emails" element={<Emails />} />
                <Route path="/courseView/:id" element={<CourseView />} />
                <Route path="/studentView/:id" element={<StudentView />} />
                <Route path="/salary" element={<Salary />} />
                <Route
                  path="/salaryHistoryView"
                  element={<SalaryHistoryView />}
                />
                <Route path="/fees" element={<FeesPage />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/course" element={<Course />} />
                <Route path="/expenditure" element={<Expenditure />} />
                <Route path="/unit" element={<UnitsPage />} />
                <Route path="/class" element={<ClassessPage />} />
                <Route path="/department" element={<DepartmentsPage />} />
                <Route path="/addStaff" element={<AddStaff />} />
                <Route path="/staffView" element={<StaffView />} />
                <Route path="/examination" element={<Examinations />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
