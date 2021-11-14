import { useState, useEffect } from 'react';
import axios from 'axios';
export const useStudents = ({ groupId = '' } = {}) => {
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const result = await axios.get(`/students/${groupId}`);
        setStudents(result.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupId]);
  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post('/students/search', {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    students,
    groups,
    findStudents,
  };
};
