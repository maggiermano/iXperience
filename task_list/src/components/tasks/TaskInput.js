import React, { useState } from 'react';

import Spinner from '../common/Spinner';

export default function TaskInput(props) {

  const [task, setTask] = useState("");
  const [saving, setSaving] = useState(false);

  async function onTaskFromSubmit(e) {
    e.preventDefault();

    setSaving(true);
    await props.onTaskCreate(task);
    setSaving(false);

    setTask('');
  }

  return (
    <div>
      <form onSubmit={onTaskFromSubmit}>
        <div className="input-group mb-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}

            type="text"
            className="form-control"
            placeholder="Task"
          />

          <button
            className="btn btn-outline-secondary"
            disabled={saving}
            type="submit" >
            {
              saving ?
                <Spinner />
                :
                '+'
            }
          </button>
        </div>
      </form>

    </div>
  )
}