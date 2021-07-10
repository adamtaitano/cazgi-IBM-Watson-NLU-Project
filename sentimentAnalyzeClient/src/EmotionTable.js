import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              [this.props.emotions].map((emotion, index) => (
                  <>
                        <tr>
                            <td>Sadness:</td>
                            <td>{emotion.sadness}</td>
                        </tr>
                        <tr>
                            <td>Joy:</td>
                            <td>{emotion.joy}</td>
                        </tr>
                        <tr>
                            <td>Fear:</td>
                            <td>{emotion.fear}</td>
                        </tr>
                        <tr>
                            <td>Disgust:</td>
                            <td>{emotion.disgust}</td>
                        </tr>
                        <tr>
                            <td>Anger:</td>
                            <td>{emotion.anger}</td>
                        </tr>
                    </>
                ))
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
