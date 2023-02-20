import React, { useState } from 'react'
import styles from '@/styles/Workflow.module.css'
import Image from 'next/image'
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';
import { color, margin, style } from '@mui/system';
import { red } from '@mui/material/colors';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Workflow = () => {
    const backlogCards = [
        {
            id: 1,
            project: 'ContactRM',
            name: 'Design a Website',
            tags: ['api.contactrm.com', 'ap.contactrm'],
            tagscolors: ['#FFEEDE','#FFDEFC'],
            iconSrc: '/Userstar.png',
            days: '15'
        },
        {
            id: 2,
            project: 'ContactRM',
            name: 'Design a Website',
            tags: ['api.contactrm.com', 'ap.contactrm'],
            iconSrc: '/Userstar.png',
            days: '10'
        },
        {
            id: 3,
            project: 'ContactRM',
            name: 'Design a Website',
            tags: ['api.contactrm.com', 'ap.contactrm'],
            iconSrc: '/Userstar.png',
            days: '12'

        },
        {
            id: 4,
            project: 'ContactRM',
            name: 'Design a Website',
            tags: ['api.contactrm.com', 'ap.contactrm'],
            iconSrc: '/Userstar.png',
            days: '9'

        },
        {
            id: 5,
            project: 'ContactRM',
            name: 'Design a Website',
            tags: ['api.contactrm.com', 'ap.contactrm'],
            iconSrc: '/Userstar.png',
            days: '7'
        }
    ] 

    const filterValues = [
        {
            title: 'Project',
            values: ['ContactRM', 'AgentBook', 'W4RTeam', 'LeadBank', 'Project5', 'Project6'],
            color : ['#FF0000','#00FF00','#A020F0','#FFA500','#FFFxF00','#FFFxF00']
        },
        {
            title: 'Tags',
            values: ['api.contactrm.com', 'api.contactmr', 'RestrictiveAPIs', 'api.agentbook.com', 'tag5', 'tag6'],
            color : ['#FF0000','#00FF00','#A020F0','#FFA500','#FFFxF00','#FFFxF00']
        }, 
        {
            title: "Assigned To",
            values: [
                {
                    name: 'Savannah',
                    profileSrc: '/other5.png'
                },
                {
                    name: 'Wade',
                    profileSrc: '/other2.png'
                },
                {
                    name: 'Jane',
                    profileSrc: '/other3.png'
                },
                {
                    name: 'Jacob',
                    profileSrc: '/other4.png'
                },
                {
                    name: 'Bill',
                    profileSrc: '/other1.png'
                },
                
            ],
            color : ['#FF0000','#00FF00','#A020F0','#FFA500','#FFFxF00','#FFFxF00']
        }
    ]

    const views = [
        {
            name: 'My first filter',
            color: '#FF0000'
        },
        {
            name: 'Available for me',
            color: '#00FF00'
        },
        {
            name: 'Current Tasks',
            color: '#A020F0'
        },
        {
            name: 'Top Project',
            color: '#0E8CFF'
        },
        {
            name: 'Favorites',
            color: '#0E8CFF'
        },
    ]

    const people = [
        {
            id: 1,
            name: 'Savannah',
            profile: '/other5.png'
        },
        {
            id: 2,
            name: 'Savannah',
            profile: '/other5.png'
        },
        {
            id: 3,
            name: 'Savannah',
            profile: '/profile.png'
        },
        {
            id: 4,
            name: 'Savannah',
            profile: '/profile.png'
        },
        {
            id: 5,
            name: 'Savannah',
            profile: '/profile.png'
        },
        {
            id: 6,
            name: 'Savannah',
            profile: '/profile.png'
        },
        {
            id: 7,
            name: 'Savannah',
            profile: '/profile.png'
        }
    ]

    const [filterPopup, setFilterPopup] = useState(false)
    const [sortPopup, setSortPopup] = useState(false)
    const [pinnedPopup, setPinnedPopup] = useState(false)
    const [viewPopup, setViewPopup] = useState(false)
    const [archivePopup, setArchivePopup] = useState(false)
    const [selectedArchive, setSelectedArchive] = useState('Archive')

    const [saveViewModalOpen, setSaveViewModalOpen] = useState(false)


    const filterPopupToggle = () => {
        setFilterPopup(!filterPopup)
    }
    
    const toggleSortPopup = () => {
        setSortPopup(!sortPopup)
    }

    const togglePinnedPopup = () => {
        setPinnedPopup(!pinnedPopup)
    }
    
    const toggleViewPopup = () => {
        setViewPopup(!viewPopup)
    }

    const toggleArchivePopup = () => {
        setArchivePopup(!archivePopup)
    }

    const toggleModalOpen = () => {
        setSaveViewModalOpen(!saveViewModalOpen)
    }
    return (
       <>
       <div className={styles.workflow}>
            <div className={styles.workflow__topMenu}>
                <div className={styles.workflow__topMenu__left}>
                    <div className={styles.workflow__topMenu__left}>
                        Workflow
                    </div>
                    <div className={styles.workflow__topMenu__left__buttons}>
                        <CircularButton
                        iconSrc='/Workflow.png' 
                        selected={true}
                        />
                        <CircularButton
                        iconSrc='/Design.png' 
                        selected={false}
                        />
                        <CircularButton
                        iconSrc='/Code.png' 
                        selected={false}
                        />
                        <CircularButton
                        iconSrc='/Announcement.png' 
                        selected={false}
                        />
                    </div>
                    <div className={styles.workflow__topMenu__left__avatarList} >
                        <div className={styles.workflow__topMenu__left__avatar} >
                            <Image 
                                src='/other3.png'
                                fill={true}
                                quality={100}
                            />
                        </div>
                        <div className={styles.workflow__topMenu__left__avatar} >
                            <Image 
                                src='/other4.png'
                                fill={true}
                                quality={100}
                            />
                        </div>
                        <div className={styles.workflow__topMenu__left__avatar} >
                            <Image 
                                src='/other5.png'
                                fill={true}
                                quality={100}
                            />
                        </div>
                        <div className={styles.workflow__topMenu__left__avatar} >
                            <Image 
                                src='/other6.png'
                                fill={true}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.workflow__topMenu__right}>
                    <div className={styles.button}>
                        <IconButton 
                            iconSrc='/Thumb.png'
                            height={24}
                            width={24}
                            onClick={togglePinnedPopup}
                        />
                        <div className={pinnedPopup ? styles.pinnedPopup : styles.hidePopup}>
                            <div className={styles.filterPopup__heading}>
                                Pinned Cards
                                <div
                                    onClick={togglePinnedPopup}
                                    style = {{cursor: 'pointer'}}
                                >
                                    <Image
                                        src='/Close.png'
                                        height={15}
                                        width={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.searchPinned}>
                                <Image
                                    src='/Search.png'
                                    height={15}
                                    width={15}
                                />
                                <input type='text' placeholder='Search' />
                            </div>
                            <div className={styles.pinned__cardsList}>
                                {backlogCards.map((card) => 
                                    <Card key={card.id} project={card.project} 
                                        name={card.name}
                                        tags={card.tags}
                                        days={card.days}
                                        iconSrc={card.iconSrc}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <IconButton 
                        iconSrc='/Folders.png'
                        height={24}
                        width={24}
                        onClick={toggleArchivePopup}
                        />
                        <div className={archivePopup ? styles.archivePopup : styles.hidePopup}>
                            {
                                selectedArchive == 'Archive' ? (
                                    <>
                                    <div className={styles.archiveHeader}>
                                        <div className={styles.archiveButtons}>
                                            <div className={styles.archiveButton}
                                                style={{backgroundColor: '#0E8CFF', color: 'white'}}
                                                onClick={() => {
                                                    setSelectedArchive('Archive')
                                                }}
                                            >
                                                <Image 
                                                    src='/Archive.png'
                                                    height={16}
                                                    width={16}
                                                    style={{marginRight: '5px'}}
                                                    className={styles.selectedIcon}
                                                />
                                                Archive
                                            </div>
                                            <div className={styles.archiveButton}
                                                onClick={() => {
                                                    setSelectedArchive('Snooze')
                                                }}
                                            >
                                                <Image 
                                                    src='/Snooze.png'
                                                    height={16}
                                                    width={16}
                                                    style={{marginRight: '5px'}}
                                                />
                                                Snooze
                                            </div>
                                        </div>
                                        <div
                                            onClick={toggleArchivePopup}
                                            style = {{cursor: 'pointer'}}
                                        >
                                            <Image
                                                src='/Close.png'
                                                height={15}
                                                width={15}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.searchPinned}>
                                        <Image
                                            src='/Search.png'
                                            height={15}
                                            width={15}
                                        />
                                        <input type='text' placeholder='Search' />
                                    </div>
                                    <div className={styles.pinned__cardsList}>
                                        {backlogCards.map((card) => 
                                            <Card key={card.id} project={card.project} 
                                                name={card.name}
                                                tags={card.tags}
                                                days={card.days}
                                                iconSrc={card.iconSrc}
                                            />
                                        )}
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <div className={styles.archiveHeader}>
                                        <div className={styles.archiveButtons}>
                                            <div className={styles.archiveButton}
                                                onClick={() => {
                                                    setSelectedArchive('Archive')
                                                }}
                                            >
                                                <Image 
                                                    src='/Archive.png'
                                                    height={16}
                                                    width={16}
                                                    style={{marginRight: '5px'}}
                                                />
                                                Archive
                                            </div>
                                            <div className={styles.archiveButton}
                                                style={{backgroundColor: '#0E8CFF', color: 'white', cursor: 'pointer'}}

                                                onClick={() => {
                                                    setSelectedArchive('Snooze')
                                                }}
                                            >
                                                <Image 
                                                    src='/Snooze.png'
                                                    height={16}
                                                    width={16}
                                                    style={{marginRight: '5px'}}
                                                    className={styles.selectedIcon}
                                                />
                                                Snooze
                                            </div>
                                        </div>
                                        <div
                                            onClick={toggleArchivePopup}
                                            style = {{cursor: 'pointer'}}
                                        >
                                            <Image
                                                src='/Close.png'
                                                height={15}
                                                width={15}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.searchPinned}>
                                        <Image
                                            src='/Search.png'
                                            height={15}
                                            width={15}
                                        />
                                        <input type='text' placeholder='Search' />
                                    </div>
                                    <div className={styles.pinned__cardsList}>
                                        {backlogCards.map((card) => 
                                            <Card key={card.id} project={card.project} 
                                                name={card.name}
                                                tags={card.tags}
                                                days={card.days}
                                                iconSrc={card.iconSrc}
                                            />
                                        )}
                                    </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button 
                            onClick={toggleViewPopup}
                            iconSrc='/Save.png'
                            buttonText='Views'
                        />
                        <div className={viewPopup ? styles.viewPopup : styles.hidePopup}>
                            <div className={styles.filterPopup__heading}>
                                Views
                                <div
                                    onClick={toggleViewPopup}
                                    style = {{cursor: 'pointer'}}
                                >
                                    <Image
                                        src='/Close.png'
                                        height={15}
                                        width={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.viewsList}>
                                {
                                    views.map((view) => 
                                        <div key={view.name} className={styles.viewListItem}>
                                            
                                            
                                            <div style={{padding:'2px'}}>
                                            <span style={{height: '12px',
                                            width: '12px',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight:'2px',
                                            backgroundColor:view.color}}></span>
                                            <span>{view.name}</span>    
                                            </div>
                                            <span><DeleteOutlineOutlinedIcon color="warning"/></span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button
                            onClick={filterPopupToggle}
                            iconSrc='/Filter.png'
                            buttonText='Filter'
                        />
                        <div className={filterPopup ? styles.filterPopup : styles.hidePopup}>
                            <div className={styles.filterPopup__heading}>
                                Filter by
                                <div
                                    onClick={filterPopupToggle}
                                    style = {{cursor: 'pointer'}}
                                >
                                    <Image
                                        src='/Close.png'
                                        height={15}
                                        width={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.filterSections}>
                                <FilterSection 
                                    sectionTitle={filterValues[0].title}
                                    sectionValues={filterValues[0].values}
                                    sectionColor={filterValues[0].color}
                                />
                                <FilterSection 
                                    sectionTitle={filterValues[1].title}
                                    sectionValues={filterValues[1].values}
                                    sectionColor = {filterValues[1].color}
                                />
                                <FilterSection 
                                    sectionTitle={filterValues[2].title}
                                    sectionValues={filterValues[2].values}
                                    sectionColor = {filterValues[2].color}
                                />
                            </div>
                            <div className={styles.filterBottomMenu}>
                                    <Button buttonText='Save as view' 
                                        style = {{color: '#0E8CFF'}}
                                        onClick = {toggleModalOpen}
                                    />
                                <div className={styles.FinalButtons}>
                                    <Button buttonText='Clear' />
                                    <Button buttonText='Apply' 
                                        buttonColor='blue'
                                    />
                                    
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button 
                            onClick={toggleSortPopup}
                            iconSrc='/SortBy.png'
                            buttonText='Sort by'
                        />
                        <div className={sortPopup ? styles.sortPopup : styles.hidePopup}>
                            <div className={styles.filterPopup__heading}>
                                Sort by
                                <div
                                    onClick={toggleSortPopup}
                                    style = {{cursor: 'pointer'}}
                                >
                                    <Image
                                        src='/Close.png'
                                        height={15}
                                        width={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.sortSectionVal}>
                                Order
                            </div>
                            <div className={styles.sortSectionVal}>
                                Creation Date
                            </div>
                            <div className={styles.sortSectionVal}>
                                Due Date
                            </div>
                            <div className={styles.sortSectionVal}>
                                Sitting Count
                            </div>
                            <div className={styles.sortSectionVal}>
                                Move Count
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.workflow__cards}>
                <CardColumn title='Backlog' cards={backlogCards.slice(0,3)}/>
                <CardColumn title='To Do' cards={backlogCards.slice(0,3)}/>
                <CardColumn title='In Process' cards={backlogCards.slice(0,4)}/>
                <CardColumn title='In Review' cards={backlogCards.splice(0,3)}/>
                <CardColumn title='Completed' cards={backlogCards.slice(0,4)}/>
            </div>
        </div>
        <div className={saveViewModalOpen ? styles.darken : styles.hidePopup} />
        <SaveViewModal modalOpen={saveViewModalOpen} onClose = {toggleModalOpen} people={people} />
        <DeleteModal modalOpen={false} />
        </>
    )
}

const DeleteModal = ({modalOpen}) => {
    return (
        <div className={modalOpen ? styles.modalContainer : styles.hidePopup}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                    <p>
                        Delete
                    </p>
                </div>
                <div className={styles.close}>
                    <Image src='/Close.png'
                        height={20}
                        width={20} 
                    />
                </div>
            </div>
            <div className={styles.deleteModalBody}>
                <p>Are you sure you want to delete this filter?</p>
            </div>
            <div className={styles.deleteModalFooter}>
                <button className={styles.cancelButton}> Cancel </button>
                <button className={styles.deleteButton}> Delete </button>

            </div>
        </div>
    )
}
const SaveViewModal = ({modalOpen, onClose, people}) => {
    const [dropdownVal, setDropDownVal] = useState('Enter or select a name')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div className={modalOpen ? styles.modalContainer : styles.hidePopup}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                    <Image src='/save.png'
                        height={20}
                        width={20} 
                    />
                    <p>
                        Saved as a View
                    </p>
                </div>
                <div className={styles.close} onClick={onClose}>
                    <Image src='/Close.png'
                        height={20}
                        width={20} 
                    />
                </div>
            </div>
            <div className={styles.modalBody}>
               <p>View name</p>
                <div className={styles.nameField}>
                    <div className={styles.nameField__text}>
                        <input type='text' placeholder='Enter Name' />
                    </div>
                    <div className={styles.nameField__color}>
                        <input type='color' />
                    </div>
                </div>
                <div className={styles.shareField}>
                   <p>Share with others</p>
                    <div className={styles.customSelect}>
                        <div className={styles.dropdown} 
                            onClick = {
                                () => {setDropdownOpen(!dropdownOpen)}
                            }
                        >
                            {dropdownVal}
                            <Image
                                src='/Arrow Chevron.png'
                                height={22}
                                width={22}
                            />
                        </div>
                        <div className={dropdownOpen ? styles.peopleModalPopup : styles.hidePopup}>
                            {people.map((person) => 
                                <div className={styles.personOption} key={person.id}>
                                    <div className={styles.checkboxes}>
                                    <input type='checkbox'  value={person.name} />
                                    <div>
                                        <ProfileAvatar profileSrc={person.profile} />
                                    </div>
                                    <p>{person.name}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FilterSection = ({sectionTitle, sectionValues, sectionColor}) => {
    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    const smallerArray = sectionValues.slice(0, 4);
    
    return (
        sectionTitle !== 'Assigned To' ? (
            <div className={styles.filterPopup__sectionHead}>
            <div className={styles.filterPopup__sectionHead__title}>
                {sectionTitle}
            </div>
            <div className={styles.filter__section}>
                {
                    showMore ? (
                        sectionValues.map((value) => 
                            <div key={value}>
                                <div className={styles.checkboxes}>

                                    <input type='checkbox' value={value} />
                                    <label>{value}</label>
                                </div>
                            </div>
                        )
                    ) : (
                        smallerArray.map((value,index) => 
                            <div className={styles.checkboxes} key={value}>
                                {sectionTitle!='Tags'? (<div> <input type='checkbox' value={value} />
                               
                               <span style= {{ 
                                   backgroundColor : sectionColor[index],
                                   height: '12px',
                                   width: '12px',
                                   borderRadius: '50%',
                                   display: 'inline-Block',
                                   marginRight:'4px'}}> </span>
                               <label>{value}</label></div> ) : (<div style={{margin:'2%'}}>
                               <input type='checkbox' value={value} />
                               <label style= {{ 
                                backgroundColor : sectionColor[index],
                                color:'white', padding:'6px', borderRadius:'25px', margin:'1px', textAlign:'center'}}>{value}</label> </div>) }
                                
                            </div>
                        )
                    )
                }
            </div>
            <div onClick={toggleShowMore} className={styles.showMore}>
                {
                    showMore ? (
                        <p>
                            Show less...
                        </p>
                    ) : (
                        <p>
                            Show all...
                        </p>
                    )
                }
            </div>
        </div>
        ): (
            <div className={styles.filterPopup__sectionHead}>
            <div className={styles.filterPopup__sectionHead__title}>
                {sectionTitle}
            </div>
            <div className={styles.filter__section}>
                {
                    showMore ? (
                        sectionValues.map((value) => 
                            <div key={value.name}>
                                <div className={styles.checkboxes}>
                                <input type='checkbox'  value={value.name} />
                                <div>
                                    <ProfileAvatar profileSrc={value.profileSrc} />
                                </div>
                                <p>{value.name}</p>
                                </div>
                            </div>
                        )
                    ) : (
                        smallerArray.map((value) => 
                            <div className={styles.checkboxes} key={value.name}>
                                <input type='checkbox' value={value.name} />
                                <div>
                                    <ProfileAvatar profileSrc={value.profileSrc} />
                                </div>
                                <p>{value.name}</p>
                            </div>
                        )
                    )
                }
            </div>
            <div onClick={toggleShowMore} className={styles.showMore}>
                {
                    showMore ? (
                        <p>
                            Show less...
                        </p>
                    ) : (
                        <p>
                            Show all...
                        </p>
                    )
                }
            </div>
        </div>
        )
    )
}

const CircularButton = ({iconSrc, selected}) => {
        const container = selected ? (
        <div className={styles.circularButton}
            style={{backgroundColor: '#0E8CFF'}}
        >
            <div className={styles.iconContainer}>
             <Image 
                src={iconSrc}
                height={20}
                width={20}
                quality={100}
                className={styles.selectedIcon} 
             />
        </div>
        </div>
    ) : (
        <div className={styles.circularButton}
            style={{backgroundColor: '#EBECED'}}
        
        >
          <div className={styles.iconContainer}>
             <Image 
                src={iconSrc}
                height={20}
                width={20}
                quality={100}
             />
        </div>
        </div>
    )


    return container
}

const CardColumn = ({title, cards}) => {
    const [addCardDetails, setAddCardDetails] = useState(false)
    const [listPopup, setListPopup] = useState(false)

    const addCardClick = () => {
        setAddCardDetails(!addCardDetails)
    }
    
    const toggleListPopup = () => {
        setListPopup(!listPopup)
    }

    return (
        <div className={styles.cardColumn}>
            <div className={styles.columnHeader}>
                <div className={styles.columnHeader__left}>
                    <p>
                        {title} ({cards.length})
                    </p>
                    <Image 
                        src = '/Filter.png'
                        height={18}
                        width={18}
                    />
                    <Image 
                        src = '/SortBy.png'
                        height={18}
                        width={18}
                    />
                </div>
                <div className={styles.columnHeader__right} onClick={toggleListPopup}>
                    <Image 
                        src = '/Menu Dot.png'
                        height={18}
                        width={18}
                    />
                    <div className={listPopup ? styles.listPopup : styles.hidePopup}>
                            <div className={styles.filterPopup__heading}>
                                List Actions
                                <div
                                    onClick={toggleListPopup}
                                    style = {{cursor: 'pointer'}}
                                >
                                    <Image
                                        src='/Close.png'
                                        height={15}
                                        width={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.sortSectionVal}>
                                Order
                            </div>
                            <div className={styles.sortSectionVal}>
                                Creation Date
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.cardsList}>
                {cards.map((card) => 
                    <Card key={card.id} project={card.project} 
                        name={card.name}
                        tags={card.tags}
                        days={card.days}
                        iconSrc={card.iconSrc}
                    />
                )}
            </div>
            {
                addCardDetails ? (
                    <div className={styles.cardDetails}>
                        <div className={styles.cardTitle}
                        onClick = {addCardClick}
                        >
                            <p>
                                Card title
                            </p>
                            <Image 
                            src ='/Close.png'
                            height={15}
                            width={15}
                            />
                        </div>
                        <div className={styles.textField}>
                            <input type='text'
                            placeholder='Enter card name'
                            />
                        </div>

                        <div className={styles.selectProject}>
                            <div className={styles.projectsDropdown}>
                                <select>
                                    <option>Project1</option>
                                    <option>Project1</option>
                                    <option>Project1</option>
                                    <option>Project1</option>

                                </select>
                            </div>
                            <div className={styles.addButton}>
                                Add
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.addCard}
                    onClick={addCardClick}
                    >
                            <Image 
                            src = '/BluePlus.png'
                            height={20}
                            width={20}
                            />
                            <p>Add Card</p>
                    </div>
                )
            }
        </div>
    )
}

const Card = ({project, name, tags, iconSrc, days}) => {
    return (
        <div className={styles.card}>
            <div className = {styles.card__project}>
                <div className={styles.card__project__title}>
                    <div className={styles.projectColor}/>
                    <div>
                        {project}
                    </div>
                </div>
                <Image
                src={iconSrc}
                height={15}
                width={15}
                />
            </div>
            <div className={styles.card__name}>
                {name}
            </div>
            <div className={styles.card__tags}>
                {
                    tags.map((tag) => 
                        <div key={styles.tag} className={styles.tag}>
                            {tag}
                        </div>
                    )
                }
            </div>
            <div>
                <Image 
                src = '/Description.png'
                height={14}
                width={14}
                />
            </div>
            <div className={styles.created}>
                <div className={styles.createdDate}>Created {days} days ago</div>
                <div>
                    <ProfileAvatar profileSrc='/main.png' />
                </div>
            </div>
        </div>
    )
}

const ProfileAvatar = ({profileSrc}) => {
    return (
      <div className={styles.avatarProfile}>
        <Image src={profileSrc} 
          fill={true}
          quality={100}
        />
      </div>
    ) 
}

export default Workflow;
