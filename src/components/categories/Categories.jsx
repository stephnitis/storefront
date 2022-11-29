import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, filterCategory } from '../../store/reducers/category-reducer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Categories = (props) => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  const { filterCategory } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="100%"
        minHeight="10vh"
      >
        <Typography
          variant="h6">
          Browse our Categories
        </Typography>
        <Stack direction="row">
          {
            props.categories.map((category, index) => (
              <ButtonGroup key={`category-${index}`} variant="text" aria-label="text button group">
                <Button onClick={() => filterCategory(category.name)}>{category.name}</Button>
              </ButtonGroup>
            ))
          }
        </Stack>
      </Box>
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
