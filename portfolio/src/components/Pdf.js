/* import React from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import resume_june_22 from "../assets/Jaclyn_Chen_Resume_June22.pdf";


const url = 
"https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

const ResumePdf = () =>{

    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <>
        <div className="main">
          <Document
            file={resume_june_22}
            //onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={1} />
          </Document>
         </div>
        </>
      );


}

export default ResumePdf; */