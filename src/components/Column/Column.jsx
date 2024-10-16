import React, { useMemo } from 'react';
import Card from '../Card/card';
import "./column.css";
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon/usericon';

function Column({ tickets, grouping, groupBy, userIdToData }) {
    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return userIdToData[groupBy]?.name || "Unknown User"; // Added safety check
    }, [grouping, groupBy, userIdToData]); // Added userIdToData to dependencies

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user") {
            const user = userIdToData[groupBy];
            return user ? <UserIcon name={user.name} available={user.available} /> : null; // Added safety check
        }
    }, [grouping, groupBy, userIdToData]); // Added userIdToData to dependencies

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <GrAdd color="#797d84" size={12} />
                    <LuMoreHorizontal color="#797d84" size={14} />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => (
                    <Card 
                        key={ticket.id} 
                        ticket={ticket} 
                        userData={userIdToData[ticket.userId]} 
                        hideStatusIcon={grouping === "status"} 
                        hideProfileIcon={grouping === "user"} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
