import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function Form() {
  let nav = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().trim().matches("test").required("Please type test"),
    password: yup.string().matches("test").required("Please type test"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = (date) => {
    console.log(date);
    nav("/home");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-5 items-center h-full w-full justify-center py-4 "
    >
      <input
        className=" rounded-full w-7/12 border-2 bg-green-750 border-green-150 dark:bg-green-150 dark:border-olive-150 focus:outline-none focus:ring focus:bg-green-150 focus:ring-green-750 dark:focus:bg-green-750 dark:focus:border-green-150 p-2"
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      <input
        className="rounded-full w-7/12 border-2 bg-green-750 border-green-150 dark:bg-green-150 dark:border-olive-150 focus:outline-none focus:ring focus:bg-green-150 focus:ring-green-750 dark:focus:bg-green-750 dark:focus:border-green-150 p-2"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {(errors.password || errors.name) &&
        alert(" Username & Password is test")}
      <input
        className="rounded-full bg-black-750 border-2 hover:border-green-750 w-1/3 p-2 "
        type="submit"
      />
    </form>
  );
}

export default Form;
