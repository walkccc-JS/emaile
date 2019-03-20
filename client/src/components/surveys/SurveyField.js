// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({
  input,
  label,
  icon,
  placeholder,
  meta: { error, touched }
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left">
        <input
          className="input"
          type="text"
          {...input}
          placeholder={placeholder}
        />
        <span className="icon is-small is-left">
          <i className={icon} />
        </span>
      </div>
      <p className="has-text-danger">{touched && error}</p>
    </div>
  );
};
