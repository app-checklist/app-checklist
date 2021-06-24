import React from 'react'

export default function Checkbox({ 
    children,
    title = '',
    cb_id = 'id1',
 }) {
    let styles = {
        marginTop: '16px',
        marginBottom: '16px',
      };
    return <div>
        <div class="flex items-start">
            <input 
                id={cb_id} 
                type="checkbox" 
                class="form-checkbox h-4 w-4" 
                style={{marginRight: '10px', marginTop: '7px'}}
                />
            <label for={cb_id}>
            <span class="font-semibold text-lg">{title}</span>
            {children != null &&
                <details>
                    <summary><span class="text-gray-600">More</span></summary>
                    {children}
                </details>
            }
            </label>
        </div>
        <hr style={styles}/>
    </div>
}
