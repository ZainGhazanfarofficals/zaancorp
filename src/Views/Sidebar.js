import React from 'react'
import styles from '@/styles/Sidebar.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SpeedIcon from '@mui/icons-material/Speed';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

const Sidebar = () => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__header}>
                <div className={styles.sidebar__header__info}>
                    <div className={styles.sidebar__header__status} />
                    <div>
                        <p>Zaan Corp</p>
                    </div>
                    <div>
                        <KeyboardArrowDownIcon 
                            sx = {{color: '#070F21'}}
                        />
                    </div>
                </div>
                <div className={styles.clickable}>
                    <KeyboardDoubleArrowLeftIcon
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </div>
            </div>
            <div className={styles.sidebar__list}>
                <SidebarCard title = "Dashboard" selected={false}> 
                    <SpeedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Workflow" selected={true}> 
                    <InsertChartOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Calender" selected={false}> 
                    <CalendarMonthOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "SocialRM" selected={false}> 
                    <HubOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Metrics" selected={false}> 
                    <ShowChartOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Leads" selected={false}> 
                    <SearchOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Users" selected={false}> 
                    <PersonOutlineOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Notifications" selected={false}> 
                    <NotificationsOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Documents" selected={false}> 
                    <DescriptionOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
                <SidebarCard title = "Segments" selected={false}> 
                    <TrackChangesOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
            </div>
            <>
                <SidebarCard title = "Company" selected={false}> 
                    <TaskOutlinedIcon 
                        sx = {{color: '#070F21', fontSize: '25px'}}
                    />
                </SidebarCard>
            </>
        </div>
    )
}


const SidebarCard = ({children, title, selected}) => {
    return (
        <div className={selected ? styles.selectedCard : styles.card}>
            <div className={styles.card__icon}>
                {children}
            </div>
            <div className={styles.card__title}>
                {title}
            </div>
        </div>
    )
}
export default Sidebar