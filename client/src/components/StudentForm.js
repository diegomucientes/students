import React,{useState} from 'react';
import { Formik, Field, Form, } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import '../styles/StudentForm.css';

const StudentForm = (props) => {

    const {iNombre,onSubmitProp,iCurso,iCondicion,iNumeroPadre,iNumeroMadre}=props;

   
    return (
        <div >
          <Formik
          initialValues={{
          Nombre : iNombre,
          Curso:iCurso,
          Condicion:iCondicion,
          NumeroPadre:iNumeroPadre,
          NumeroMadre:iNumeroMadre

          
        }}
        validationSchema={Yup.object().shape({
            Nombre: Yup.string()
            .min(3, "El Nombre del alumno debe tener más de 3 caracteres y es obligatorio")
            .required ("Por favor ingresa el Nombre del Alumno"),
            
            Curso:Yup.string()
            .min(3, "El curso debe tener 3 caracteres minimo")
            .required ("Por favor ingresa un Curso"),

            Condicion:Yup.string()
            .required ("Por favor ingresa la condición especial de su alumno"),
            NumeroPadre:Yup.number()
            .required ("Por favor ingresa el numero del padre del alumno"),

            NumeroMadre:Yup.number()
            .required ("Por favor ingresa el numero de la madre de alumno "),




          
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div className="wrapper">
                <h1>Formulario para Alumnos con necesidades Especiales</h1>
                <Form classTitle= "contact" method= "post" onSubmit={handleSubmit} className="form">

                    <div className="Nombre">
                    <label htmlFor="Nombre" classTitle="col-sm-2 col-form-label">
                            Nombre
                        </label>
                        <br></br>
                        <Field id='Nombre'type="text" classTitle="form-control" placeholder="Nombre" name='Nombre'className="campo"></Field>
                         {errors.Nombre && touched.Nombre && <p>{errors.Nombre}</p>};
                    </div>
                    <div className="Curso">
                    <label htmlFor="Curso" classTitle="col-sm-2 col-form-label">
                            Curso
                        </label>
                        <br></br>
                        <Field id='Curso'type="text" classTitle="form-control" placeholder="Curso" name='Curso'className="campo"/>
                         {errors.Curso && touched.Curso && <p>{errors.Curso}</p>};
                    </div>
                    <div className="Condicion">
                        
                    <label htmlFor="Condicion" classTitle="col-sm-2 col-form-label">
                            Condición del Alumno
                        </label>
                        <br></br>
                        <Field id='Condicion'type="text" classTitle="form-control" placeholder="Condicion" name='Condicion'className="campo" />
                         {errors.Condicion && touched.Condicion && <p>{errors.Condicion}</p>};
                    </div>
                    <div className="NumeroPadre">
                    <label htmlFor="NumeroPadre" classTitle="col-sm-2 col-form-label">
                           Número del Padre
                        </label>
                        <br></br>
                        <Field id='NumeroPadre'type="text" classTitle="form-control" placeholder="NumeroPadre" name='NumeroPadre' className="campo"/>
                         {errors.NumeroPadre && touched.NumeroPadre && <p>{errors.NumeroPadre}</p>};
                    </div>
                    <div className="NumeroMadre">
                        <label htmlFor="NumeroMadre" classTitle="col-sm-2 col-form-label">
                            Número de la Madre
                        </label>
                        <br></br>
                        <Field id='NumeroMadre'type="text" classTitle="form-control" placeholder="NumeroMadre" name='NumeroMadre' className="campo"/>
                         {errors.NumeroMadre && touched.NumeroMadre && <p>{errors.NumeroMadre}</p>};
                    </div>
                    <div className="Buttons">
                        <button type="submit" disabled={Object.values(errors).length > 0}>Agregar Alumno</button>
                        <button type="cancel"><Link to={`/students`}>Cancel</Link></button>
                    </div>
                       
                            
                </Form>
            </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default StudentForm