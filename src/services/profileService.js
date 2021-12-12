import url from "../constants/constants";
import constructAuthHeader from "../utils/tokenUtil";


const getProfile = async (token) => {    

        let res = await fetch((`${url}/users/`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': constructAuthHeader(token)
            }
        });

        let jsonResult = await res.json();


        if(res.ok) {
            return jsonResult;
        } else {
            throw jsonResult;
        }
}

export default getProfile;