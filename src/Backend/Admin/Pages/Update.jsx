import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import Multiselect from "multiselect-react-dropdown";
import AdminTitle from "../AdminShared/AdminTitle";
import useAllProjects from "../../../hooks/useAllProjects";
import Loading from "../../../Shared/Loading";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
//  console.log(img_hosting_token);

const Update = () => {
  const projectId = useParams();
   
  const [options, setOptions] = useState([
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JS",
    "React",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Firebase",
  ]);
  const [technology, setTechnology] = useState([]);
  // console.log("features array :", technology);
  const [inputs, setInputs] = useState([""]);
  // console.log(inputs);


  const feature = [];
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  for (let i = 0; i < inputs.length; i++) {
    feature.push(inputs[i]);
  }
  // console.log(feature);
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };


  const [projects, projectsLoading, refetch] = useAllProjects();

  if(projectsLoading){
    return <Loading></Loading>
  }
  console.log(projects,projectId);
//   console.log(typeof projectId);
  const findData = projects.find(item => item._id == projectId.id);
//   console.log(findData);
  const { _id, projectName,serverLink, clientLink, liveLink, category, description, feature:featureData, image } = findData;




  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  //  console.log(img_hosting_url);

  const onSubmit = (data) => {
    console.log(data);

    // console.log(data);
    // const { projectName, serverLink, clientLink, description, category, liveLink } = data;

    // const newProjects = { projectName, serverLink, clientLink, liveLink, category, description, image: imgURL, technology, feature };
    // console.log(newProjects);

    //     fetch('https://portfolio-server-psi-lake.vercel.app/projects', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newProjects)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);

    //             if (data.insertedId) {

    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Projects added successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Ok'
    //                 })
    //                 reset();
    //             }

    //         })
    // }
  };

  return (
    <div className="      ">
      <AdminTitle heading={"add project"}></AdminTitle>
   

      <div className=" w-full">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="   w-full   shadow-2xl bg-base-800 border  ">
            <div className="card-body">
              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">
                    Project Name
                  </span>{" "}
                </label>
                <input
                  type="text"
                  {...register("projectName", {
                    required: true,
                    maxLength: 100,
                  })}
                  value={projectName}
                  placeholder="Enter your project name"
                  className="input input-border bg-white border border-sky-300 text-black"
                />
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    Project name field is required
                  </span>
                )}
              </div>

              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">
                    Server Side Link{" "}
                  </span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your  server link  "
                  className="input input-border bg-white border border-sky-300 text-black"
                  value={serverLink}
                />
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    Server side link field{" "}
                  </span>
                )}
              </div>

              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">
                    Client Side Link{" "}
                  </span>{" "}
                </label>
                <input
                  type="text"
                  {...register("clientLink", {
                    required: true,
                    maxLength: 100,
                  })}
                  value={clientLink}
                  placeholder="Enter your  client link  "
                  className="input input-border bg-white border border-sky-300 text-black"
                />
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    Client side link field is required
                  </span>
                )}
              </div>




              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">
                    {" "}
                    Live Link{" "}
                  </span>{" "}
                </label>
                <input
                  type="text"
                  {...register("liveLink", { required: true, maxLength: 100 })}
                  placeholder="Enter your  github  link  "
                  className="input input-border bg-white border border-sky-300 text-black"
                  value={liveLink}
                />
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    {" "}
                    live link field is required
                  </span>
                )}
              </div>




              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">
                    Project Short Description{" "}
                  </span>{" "}
                </label>
                <textarea
                  {...register("description", {
                    required: true,
                    maxLength: 700,
                  })}
                  className="textarea textarea-accent bg-white text-black"
                  placeholder="Short description"
                ></textarea>
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    Short description field is required
                  </span>
                )}
              </div>




              {/* feature  */}
              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">Features</span>{" "}
                </label>

                <div>
                  {inputs.map((input, index) => (
                    <div key={index} className="flex items-center mb-2 ">
                      <input
                        type="text"
                        className="textarea textarea-accent bg-white text-black w-[90%]  "
                        placeholder="Enter your text"
                        value={input}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                      />

                      {index === inputs.length - 1 ? (
                        <button
                          className="bg-blue-500 text-white px-3 py-2  ml-4 rounded-lg"
                          onClick={handleAddInput}
                        >
                          Add More
                        </button>
                      ) : (
                        <button
                          className="bg-red-500 text-white px-3 py-2 rounded-lg ml-4"
                          onClick={() => handleRemoveInput(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>




              {/* technology  */}
              <div className="form-control mt-4 ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">Technology</span>{" "}
                </label>
                <Multiselect
                  className="border  border-sky-300  rounded-lg"
                  isObject={false}
                  options={options}
                  onRemove={(event) => {
                    event;
                  }}
                  // onSelect={(event)=>{event}}
                  onSelect={(event) => {
                    // console.log(event);
                    setTechnology(event);
                  }}
                  required
                  showCheckbox
                ></Multiselect>
              </div>




              {/* category  */}
              <div className="form-control  ">
                <label className="label">
                  {" "}
                  <span className="label-text text-black">Category </span>{" "}
                </label>
                <select
                  {...register("category", { required: true, maxLength: 100 })}
                  className="select select-accent w-full bg-white text-black"
                >
                  <option>HTML & CSS</option>
                  <option>JavaScript</option>
                  <option>React JS</option>
                  <option>Mern</option>
                </select>
                {errors.className && (
                  <span className="text-red-600 mt-2">
                    Category field is required
                  </span>
                )}
              </div>



              {/* <div class="form-control w-full my-4 ">
                <label class="label">
                  <span class="label-text text-black">Project Image*</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  class="file-input file-input-bordered w-full bg-white  "
                />
              </div> */}

              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  <input type="submit" value="Add Project" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Update;
