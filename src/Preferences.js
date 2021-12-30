import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import './Preferences.scss';

const initialPreferences = JSON.parse(
  window.localStorage.getItem('preferences')
);

function preferenceReducer(state, action) {
  switch (action.type) {
    case 'child':
      return { ...state, ageGroup: 'child' };
    case 'teen':
      return { ...state, ageGroup: 'teen' };
    case 'adult':
      return { ...state, ageGroup: 'adult' };
    case 'married':
      return { ...state, married: action.married };
    default:
      throw new Error();
  }
}

function Preferences() {
  const [state, dispatch] = useReducer(preferenceReducer, initialPreferences);

  function savePreferences(e) {
    e.preventDefault();
    window.localStorage.removeItem('preferences');
    window.localStorage.setItem('preferences', JSON.stringify(state));
  }
  function resetPreferences(e) {
    e.preventDefault();
    window.localStorage.removeItem('preferences');
    window.localStorage.setItem(
      'preferences',
      JSON.stringify(initialPreferences)
    );
  }

  return (
    <div>
      <h1>Preferences</h1>
      <form>
        <div className='age-group'>
          <label htmlFor='child'>
            <input
              onChange={() => dispatch({ type: 'child' })}
              type='radio'
              id='child'
              name='age_group'
              value='child'
            />
            Child
          </label>
          <label htmlFor='teen'>
            <input
              onChange={() => dispatch({ type: 'teen' })}
              type='radio'
              id='teen'
              name='age_group'
              value='teen'
            />
            Teen
          </label>
          <label htmlFor='adult'>
            <input
              onChange={() => dispatch({ type: 'adult' })}
              type='radio'
              id='adult'
              name='age_group'
              value='adult'
            />
            Adult
          </label>
        </div>
        <div className='marriage-status'>
          <label htmlFor='married'>
            <input
              onChange={() => dispatch({ type: 'married', married: true })}
              type='radio'
              id='married'
              name='marriage_status'
              value='married'
            />
            Married
          </label>
          <label htmlFor='not_married'>
            <input
              onChange={() => dispatch({ type: 'married', married: false })}
              type='radio'
              id='not_married'
              name='marriage_status'
              value='not_married'
            />
            Not Married
          </label>
        </div>
        <div className='form-buttons'>
          <Button onClick={savePreferences}>Save</Button>
          <Button onClick={resetPreferences}>Reset</Button>
        </div>
      </form>
    </div>
  );
}

export default Preferences;
