const { createAction } = require('@reduxjs/toolkit');

const withPayloadType = <T>() => {
  return (t: T) => ({ payload: t });
};

export const addNotes = createAction('ADD_NOTES', withPayloadType<string>());
