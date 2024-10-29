import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid grey',
  
  boxShadow: 24,
  p: 4,
};

const Body = () => {
  const filteredPhones = useSelector((state) => state.filters.filteredPhones);
  
  const [open, setOpen] = React.useState(false);

  const [selectedPhone, setSelectedPhone] = React.useState(null);

  const handleOpen = (phone) => {
    setSelectedPhone(phone);

    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedPhone(null);

  };
  // const handleFavorite = (phone)=>{
  //   setFavorites(favorite+1);
  //   console.log('setfavorite',setFavorites);
  // }

  return (
    <div className="body flex w-full">
      <div className="flex flex-wrap gap-9 p-4">
        {filteredPhones.map((item, index) => (
          
          <ul key={index} className="w-[230px] mb-4 hover:shadow-lg shadow-cyan-400/50 p-2 rounded-lg">
             
    
             <li>
  {item.id === '5'  ? (<img   className=" bg-red-600  "     src={item.url} alt="phone" />
  ) : (<img className="object-contain h-52 w-52 scale-75" src={item.url}  alt="phone" />)}
</li>            <li><strong>Phone Name:</strong> {item.phoneName}</li>
            {/* <li><strong>Price:</strong> {item.price}</li> */}
            <li><strong>Color:</strong>{item.color}</li>
            

            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.phoneName} - {item.price} 
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon  />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button className='' onClick={() => handleOpen(item)} variant="contained">More</Button>
              </CardActions>
            </Card>
          </ul>
        ))}
      </div>

      <Modal  open={open} onClose={handleClose} aria-labelledby="phone-details-title" aria-describedby="phone-details-description">
        <Box className='rounded-sm' sx={style}>

          {selectedPhone && (
            <>
              <Typography id="phone-details-title" variant="h6" component="h2">
                {selectedPhone.phoneName}
              </Typography>
              <Typography id="phone-details-description" sx={{ mt: 2 }}>
              <img className="object-contain h-[200px] w-[200px]" src={selectedPhone.url} alt="phone" />

                <strong>Brand:</strong> {selectedPhone.brand}<br />
                <strong>Price:</strong> {selectedPhone.price}<br />
                <strong>Color:</strong> {selectedPhone.color}<br />
                <strong>Battery:</strong> {selectedPhone.battery}<br />
                <strong>Screen Size:</strong> {selectedPhone.screenSize}<br />
                <strong>RAM:</strong> {selectedPhone.ram}<br />
                <strong>Storage:</strong> {selectedPhone.storage}<br />
                <strong>Description:</strong> {selectedPhone.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Body;
