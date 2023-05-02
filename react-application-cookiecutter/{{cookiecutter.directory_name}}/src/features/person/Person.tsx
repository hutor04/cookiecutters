import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useOnMount from '../../hooks/useOnMount';
import {
  getPersonLoadStatus,
  getPersonError,
  getPersonFirstName,
  getPersonLastName,
} from "./personSlice";
import { fetchPersonById } from './personThunks';
import styles from './person.module.scss';
import {RequestStatus} from "./personTypes";


const Person: FunctionComponent = () => {
  const { id: personId } = useParams();
  const dispatch = useAppDispatch();
  const status = useAppSelector(getPersonLoadStatus);
  const error = useAppSelector(getPersonError);
  const firstName = useAppSelector(getPersonFirstName)
  const lastName = useAppSelector(getPersonLastName);

  useOnMount(() => {
    const id = personId ? parseInt(personId, 10) : undefined;
    dispatch(fetchPersonById(id));
  });



  return(
    <div className={styles.personContainer}>
      <h1>Person {personId}</h1>
      { status === RequestStatus.LOADING && <p>Loading...</p> }
      { status === RequestStatus.ERROR && <p>Error: {error.message}</p> }
      { (status === RequestStatus.SUCCESS && firstName && lastName) && <p>{firstName} {lastName}</p> }
    </div>
  );
}

export default Person;
