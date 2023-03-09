import React, {useState} from 'react'
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom'
// import { DashboardNavbar, DashboardHeader } from "../components/Dashboard";

const SharedLayouts = () => {
    const [open, setOpen] = useState(false);
  return (
    <Box sx={{display:'flex'}}>
{/*         
<DashboardNavbar 
  controlNav={() => {
    if (open === true) {
      setOpen(false);
    }
  }}
  isOpen={open}/> */}
<Box sx={{ display:'flex', flexDirection:'column', width:{lg:'90%', md:'90%', sm:'100%', xs:'100%'}}}>
    {/* <DashboardHeader/> */}
    <Box mt={14}  sx={{mx:'auto', width:'85%'}}>
    <Outlet />
    </Box>
</Box>
    </Box>

  )
}

export default SharedLayouts