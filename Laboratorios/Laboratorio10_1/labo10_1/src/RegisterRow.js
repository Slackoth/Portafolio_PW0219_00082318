import React, {Component} from "react";

class RegisterRow extends Component{
    render(){
        let student = this.props.student;
        return(
            <tr className='table-active'>
                <th scope='row'>{student.carnet}</th>
                <td>{student.schedule}</td>
                <td>{new Date(student.datetime).toLocaleDateString}</td>
                <td>{parseLate(student.isLate)}</td>
                <td>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={()=>{
                            this.props.onDelete();
                        }}
                    >Drop</button>
                </td>
                
            </tr>
        );
    }

}

const parseLate = value=>{
    if (value) {
        return "Tarde pal :'v";
    }
    return "Temprano wapeton ;v";
}

export default RegisterRow;