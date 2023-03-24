import CharacterCard from "./Content/CharacterCard";
import FilterSelector from "./Content/FilterSelector";
import {Stack} from '@mui/material'
import {useState, useEffect} from "react"

const Content = () => {
    const [json, setJson] = useState([])
    
    const getData = () => {
        fetch("https://copper-chipmunk-gear.cyclic.app/character")
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setJson(data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    
    
    useEffect(() => {
        getData()
    }, [])
    
    const [type, setType] = useState("")
    
    console.log(json)
let filtered = []

/**
 * Array filters items based on search criteria (query)
 */

const filterHouses = (value) => {
    return json.filter(items => items.house.filter(
        item => item.toLowerCase().indexOf(value.toLowerCase()) >= 0
    ).length > 0 )
}

let allegainceList = json.map((item) => item.house).flat()

let housesList = [...new Set(allegainceList)]
const filterChapter = (data, arr) => {
//     return filtered = data.filter(items => value in items.chapters)
//     arr.every(key => Object.keys(item).includes(key)
    
        console.log(bookArr)
//     return filtered = data.filter(items => arr.every(key => Object.keys(items.chapters).includes(key)))
        return filtered = data.map(items => items)
            .filter(item => Object.keys(item.chapters)
            .filter((key => arr.includes(key))).length>0)
            
}

const [bookArr, setBookArr] = useState(["AGOT", "ACOK", "ASOS", "AFFC", "ADWD"])
 filtered = filterHouses(type)
 
 filterChapter(filtered, bookArr)
 
 console.log(filtered)
 
  return (
      <Stack maxWidth="xl" direction="column"  spacing={4} justifyContent="between" alignItems="center"
      >
        <FilterSelector
          housesList={housesList}
          type={type}
          setType={setType}
          bookArr={bookArr}
          setBookArr={setBookArr}
          filtered={filtered}
        />
        <CharacterCard 
          type={type}
          json={json}
          filtered={filtered}
        /> 
      </Stack>
  )
}

export default Content 
