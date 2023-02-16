import { useDropzone } from "react-dropzone";

const DragFile = ({ onDrop }) => {
    const { open, getInputProps, getRootProps, acceptedFiles } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        },
        noClick: true
    })
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))
    return (
        <div className='border border-dashed border-[#0EA5E9] text-center'>
            <div {...getRootProps({ className: "dropzone" })} className='py-8 px-4 font-medium'>
                <input className='input-zone' {...getInputProps()} />
                <p className='dropzone-content '> drag 'n' drop file here, or click to select file</p>
                <p>(Only *.jpeg and *.png images will be accepted)</p>
                <button type='button' onClick={open} className='bg-[#0EA5E9] p-3 capitalize font-medium mt-4 text-white rounded-md'> choose file</button>
                <div className="py-3">
                    <ul>{files}</ul>
                </div>
            </div>

        </div>
    );
};

export default DragFile;