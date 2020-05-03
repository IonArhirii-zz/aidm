import React, {useEffect, useState} from "react";
import './ProfileInfo.css';

const ProfileStatusWithHooks = (props) => {
  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect( () => {
    setStatus(props.status);
  }, [props.status ]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus( e.currentTarget.value);
  };
  
  return (
    <div className='status__wrapper'>
      { !editMode &&
      <div className='status__name'>
        <span onDoubleClick={activateEditMode}>
            {props.status || '----'}
        </span>
      </div>
      }
      {editMode &&
      <div className='status__input'>
        <input autoFocus={true} onBlur={deactivateEditMode}
               onChange={onStatusChange} value={status} 
        />
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;