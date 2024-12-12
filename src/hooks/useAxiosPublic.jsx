import axios from "axios";


const axiosPublic = axios.create({
  baseURL: 'https://japanes-language-server.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;