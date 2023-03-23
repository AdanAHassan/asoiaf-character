import {useState} from 'react'

import { FormControl, Autocomplete, TextField, Stack, FormControlLabel, Checkbox} from '@mui/material'


const FilterSelector = ({housesList, type, setType, bookArr, setBookArr}) => {
    
    const [boolAGOT, setBoolAGOT] = useState(false)
    const [boolACOK, setBoolACOK] = useState(false)
    const [boolASOS, setBoolASOS] = useState(false)
    const [boolAFFC, setBoolAFFC] = useState(false)
    const [boolADWD, setBoolADWD] = useState(false)
        

    const handleAGOT = () => {
        setBoolAGOT(!boolAGOT)
        console.log(boolAGOT)
        boolAGOT ? setBookArr(bookArr => [...bookArr, "AGOT"]) : setBookArr(bookArr.filter(item => item !== "AGOT"))
    }
    const handleACOK = () => {
        setBoolACOK(!boolACOK)
        console.log(boolACOK)
        boolACOK ? setBookArr(bookArr => [...bookArr, "ACOK"]) : setBookArr(bookArr.filter(item => item !== "ACOK"))
    }
    const handleASOS = () => {
        setBoolASOS(!boolASOS)
        console.log(boolASOS)
        boolASOS ? setBookArr(bookArr => [...bookArr, "ASOS"]) : setBookArr(bookArr.filter(item => item !== "ASOS"))
    }
    const handleAFFC = () => {
        setBoolAFFC(!boolAFFC)
        console.log(boolAFFC)
        boolAFFC ? setBookArr(bookArr => [...bookArr, "AFFC"]) : setBookArr(bookArr.filter(item => item !== "AFFC"))
    }
    const handleADWD = () => {
        setBoolADWD(!boolADWD)
        console.log(boolADWD)
        boolADWD ? setBookArr(bookArr => [...bookArr, "ADWD"]) : setBookArr(bookArr.filter(item => item !== "ADWD"))
    }
    
// https://stackoverflow.com/questions/70639082/how-to-make-a-react-component-state-change-on-window-resize
  return (
    <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        spacing={{xs: 1, md: 4}}
    >
    <div sx={{ flexGrow: 1 }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={housesList}
            inputValue={type}
            sx={{ width: 300 }}
            onInputChange={(e, newItem) => setType(newItem) }
            renderInput={(params) => 
            <TextField {...params} label="House" />
            }
        />
    </div>
    <FormControl sx={{p:4, flexGrow: 0, flexDirection:"row", flexWrap: 'wrap'}}>
        <FormControlLabel
            control={
            <Checkbox 
                checked={!boolAGOT}
                onChange={handleAGOT}
                label="AGOT" />
            }
            label="AGOT"
        />
        <FormControlLabel
            control={
            <Checkbox 
                checked={!boolACOK}
                onChange={handleACOK}
                label="ACOK" />
            }
            label="ACOK"
        />
        <FormControlLabel
            control={
            <Checkbox 
                checked={!boolASOS}
                onChange={handleASOS}
                label="ASOS" />
            }
            label="ASOS"
        />
        <FormControlLabel
            control={
            <Checkbox 
                checked={!boolAFFC}
                onChange={handleAFFC}
                label="AFFC" />
            }
            label="AFFC"
        />
        <FormControlLabel
            control={
            <Checkbox 
                checked={!boolADWD}
                onChange={handleADWD}
                label="ADWD" />
            }
            label="ADWD"
        />
        </FormControl>
  </Stack>
  )
}

export default FilterSelector
