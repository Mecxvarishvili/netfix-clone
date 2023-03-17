import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

type props = {
  type: string,
  formik: any
}

const InputPlacement = ({type, formik}: props) => {
    return (
      <div className="mb-3" >
        <InputGroup className='bg-dark rounded rounded-1' >
          <FloatingLabel 
            controlId={type}
            label="Email address"
            className='position-relative'
          >
            <Form.Control
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[type]}
              className='bg-dark rounded rounded-1 border-0 text-white' 
              name={type} 
              type={type}
              placeholder={type}
            />
            {formik.touched[type] && formik.errors[type] && <div className='position-absolute bottom-0 start-0 border-bottom border-2 border-warning rounded-bottom rounded-1 w-100' style={{height: "6px"}} ></div>}
          </FloatingLabel>
        </InputGroup>
        <Form.Text>
          {formik.touched[type] && formik.errors[type]? (
            <div className="text-warning mt-1 font-13">{formik.errors[type]}</div>
          ) : null}
        </Form.Text>
      </div>
    );
};

export default InputPlacement;