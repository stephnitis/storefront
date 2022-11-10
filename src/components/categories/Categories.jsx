import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, filterCategory } from '../../store/reducers/category-reducer';


const Categories = (props) => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  const { filterCategory } = props;

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Browse our Categories
      </Typography>
    {
      props.categories.map((category, index) => (
      <ButtonGroup key={`category-${index}`} variant="text" aria-label="text button group">
        <Button onClick={() => filterCategory(category.name)}>{category.name}</Button>
      </ButtonGroup>
      ))
    }
    </>
  )
}

const mapStateToProps = ({ categoryReducer }) => {
  return {
    categories: categoryReducer.categories,
  }
}

const mapDispatchToProps = {
  filterCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
