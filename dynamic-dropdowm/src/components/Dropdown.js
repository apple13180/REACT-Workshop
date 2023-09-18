const DropdownComponent =({changeFoodData})=>{

    return (
        <nav>
            <h2>Dropdown component</h2>
            <select className='menu' onChange={changeFoodData}>
                <option value='เมนูทั้งหมด'>all munu</option>
                <option value='ผัด-ทอด'>Pad tod</option>
                <option value='แกง-ต้มยำ'>Curry tom yam</option>
                <option value='เครื่องดื่ม'>Drinks</option>
                <option value='สเต็ก'>Stack</option>
            </select>
        </nav>
    )
}
export default DropdownComponent