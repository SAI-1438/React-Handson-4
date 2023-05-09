import './Style.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Students(){
    return(
        <>
        <Nav/>
        <div className='stdhdng'>
        <h1>Students Details</h1>
        <button>Add new Student</button>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Biden</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Barar</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Christ</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Elent</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><Link>Edit</Link></td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default Students;