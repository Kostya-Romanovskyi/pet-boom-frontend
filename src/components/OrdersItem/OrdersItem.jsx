import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { AuthContext } from '../../App';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const OrdersItem = () => {
    const { changeStatus, usersData } = useContext(AuthContext)
    console.log(usersData)
    return (
        <TableContainer style={{ paddingLeft: 10, paddingRight: 10 }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">Статус</StyledTableCell>
                        <StyledTableCell align="right">Ім'я</StyledTableCell>
                        <StyledTableCell align="right">Телефон</StyledTableCell>
                        <StyledTableCell align="right">Місто</StyledTableCell>
                        <StyledTableCell align="right">Відділення</StyledTableCell>
                        <StyledTableCell align="right">Спосіб оплати</StyledTableCell>
                        <StyledTableCell align="right">Колір м'ячика</StyledTableCell>
                        <StyledTableCell align="right">Додаткові побажання</StyledTableCell>
                        <StyledTableCell align="right">Дата замовлення</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersData.map((user) => (
                        <StyledTableRow key={user._id}>
                            <TableCell align="right">
                                <input
                                    type='checkbox'
                                    checked={user.status}
                                    onChange={() => changeStatus(user)}
                                />
                            </TableCell>
                            <TableCell style={{ textDecoration: user.status ? 'line-through' : 'none' }} align="right">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{user.city}</TableCell>
                            <TableCell align="right">{user.department}</TableCell>
                            <TableCell align="right">{user.paymentMethod}</TableCell>
                            <TableCell align="right">{user.ballColor}</TableCell>
                            <TableCell align="right">{user.moreInfo}</TableCell>
                            <TableCell align="right">{user.createdAt}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrdersItem