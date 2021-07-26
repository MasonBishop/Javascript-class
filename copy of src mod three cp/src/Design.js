import React, { Component } from 'react'
class Design extends Component {
    render() {
        return (
            <div className="designMain">
                <div className="header">
                    <form>
                        <p>Please enter the date for this note taking session as it will help you organize!</p>
                        <textarea rows="1" method="POST">
                        </textarea>
                        <button type="submit">Save</button>
                        <p> Now we are ready for your notes!</p>

                    </form>
                    <form>
                        <textarea >
                        </textarea>
                        <button type="submit">Save</button>
                    
                    <p>Your notes will be displayed below with the time stamp for future use!</p>
                        </form>
                </div>
            </div>
        )
    }
}
export default Design
