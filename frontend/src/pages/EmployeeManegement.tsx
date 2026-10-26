import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import EmployeeManegementMain from "../components/EmployeeManegement/EmployeeManegementMain";
import EmployeeManegementEdit from "../components/EmployeeManegement/EmployeeManegementEdit";

import type { EmployeeData } from "../types/EmployeeData";
import EmployeeManegementRegist from "../components/EmployeeManegement/EmployeeManegementRegist";

type EmployeeManegementView = 'main' | 'edit' | 'regist';

const EmployeeManegement = () => {

    const [view, setView] = useState<EmployeeManegementView>('main')

    const [selectedEmployee, setSelectedEmployee] =
        useState<EmployeeData>();

    const onSearch = () => { };

    return (
        <Box>
            <header>
                <Header />
            </header>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <SidebarMenu />

                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        ml: '300px',
                        p: 3,
                    }}
                >

                    {view === 'main' && (
                        <EmployeeManegementMain
                            onEditClick={(employee: EmployeeData) => {
                                setSelectedEmployee(employee);
                                setView('edit')
                            }}
                            onSearch={onSearch}
                            onRegistClick={() => setView('regist')}
                        />
                    )}

                    {view === 'edit' && selectedEmployee && (
                        <EmployeeManegementEdit
                            onClose={() => setView('main')}
                            employee={selectedEmployee}

                        />
                    )}

                    {view === 'regist' && (
                        <EmployeeManegementRegist
                            onClose={() => setView('main')}
                        />
                    )}


                </Box>
            </Box>
        </Box>
    );
};

export default EmployeeManegement;