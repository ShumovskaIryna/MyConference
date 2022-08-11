import React from 'react'
import flatpickr from 'flatpickr'

export default function CreatePage() {
    const config = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y (h:S K)"
    }
    flatpickr("input[type=datetime-local]", config)
return (
    <div>
        <h4>Create new conference yourself</h4>
        <form>
            <div className="input-group mb-3">
                <label>Title</label>
                <input type="text" name="name"></input>
                <label>Date</label>
                <input className="form-control" type="datetime-local" placeholder="Select Datetime"></input>
                <div className="input-group mb-3">
                    <label>Address</label>
                    <div id="map"></div>
                    <label>Country</label>
                    <input type="text" class="form-control" aria-label="Country"/>
                </div>
            </div>
            
            <div input-group mb-3>
                <button type="button" class="btn btn-primary btn-lg">Save</button>
                
<button type="button" class="btn btn-secondary btn-lg">Back</button>
            </div>

        </form>
    </div>
        
)
}