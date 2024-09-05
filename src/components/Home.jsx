import React from 'react';
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import TaskCards from './TaskCards';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons

const Home = () => {
    return (
        <div className='bg-sky-600 pt-10 w-full h-[100%] pl-4 flex gap-4 min-h-screen'>
            <Card 
                className="p-4 shadow-xl shadow-blue-gray-900/5 rounded-lg bg-white/30 backdrop-blur-lg border text-white border-white/10 
                w-full fixed bottom-0 left-0 md:relative md:w-[16rem] md:h-[80%] flex md:flex-col items-center md:items-start md:mr-2 ">  {/* Fixed horizontal at bottom for mobile, vertical for larger screens */}
                
                <List className='flex flex-row md:flex-col gap-6 w-full justify-center md:justify-start'>
                    {/* GitHub Item */}
                    <ListItem className='flex flex-col md:flex-row gap-4 hover:bg-black p-5 text-white' as="a" href="https://github.com/yourprofile">
                        <ListItemPrefix>
                            <FaGithub className="h-5 w-5" />
                        </ListItemPrefix>
                        <span className="hidden md:block">GitHub</span>
                    </ListItem>

                    {/* LinkedIn Item */}
                    <ListItem className='flex flex-col md:flex-row gap-4 hover:bg-black p-5 text-white' as="a" href="https://linkedin.com/in/yourprofile">
                        <ListItemPrefix>
                            <FaLinkedin className="h-5 w-5" />
                        </ListItemPrefix>
                        <span className="hidden md:block">LinkedIn</span>
                    </ListItem>

                    {/* Instagram Item */}
                    <ListItem className='flex flex-col md:flex-row gap-4 hover:bg-black p-5 text-white' as="a" href="https://instagram.com/yourprofile">
                        <ListItemPrefix>
                            <FaInstagram className="h-5 w-5" />
                        </ListItemPrefix>
                        <span className="hidden md:block">Instagram</span>
                    </ListItem>

                    {/* WhatsApp Item */}
                    <ListItem className='flex flex-col md:flex-row gap-4 hover:bg-black p-5 text-white' as="a" href="https://wa.me/yourphonenumber">
                        <ListItemPrefix>
                            <FaWhatsapp className="h-5 w-5" />
                        </ListItemPrefix>
                        <span className="hidden md:block">WhatsApp</span>
                    </ListItem>
                </List>
            </Card>

            {/* Task Cards Section */}
            <div className='flex-grow'>
                <TaskCards />
            </div>
        </div>
    );
}

export default Home;
