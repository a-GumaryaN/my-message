import { FC } from "react";
import AsideHeader from "../../AsideHeader/AsideHeader";
import useInput from "../../../../../hooks/useInput/useInput";

const EditProfile: FC<{}> = () => {
    const { state: fullName, dispatch: fullNameDispatch } = useInput("full name");
    const { state: username, dispatch: usernameDispatch } = useInput("username");

    return <div className="col-12 full-height overflow-auto">
        <AsideHeader pageName="profile setting" />

        <form onSubmit={(data) => { data.preventDefault() }} className="col-12 d-flex flex-column align-items-center" >
            <input value={fullName.value}
                onChange={(e) => { fullNameDispatch({ type: 'setValue', value: e.target.value }) }}
                className="col-11 input-form my-2" placeholder="full name"
            />

            <input
                className="col-11 input-form my-2" placeholder="username"
                value={username.value}
                onChange={(e) => { usernameDispatch({ type: 'setValue', value: e.target.value }) }}
            />

            <button className="btn-1">
                edit
            </button>
        </form>

    </div>
}

export default EditProfile;