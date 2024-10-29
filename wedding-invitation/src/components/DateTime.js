import React, { useState } from 'react';
import '../styles/DateTime.css';

const DateTime = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="datetime-container">
      <header>
        <h2>Ноябрь,2024</h2>
        {/* <img src="../assets/images/leaf.png" alt="Leaf" className="leaf-icon" /> Yaprak ikonu */}
      </header>

      <div className="calendar-container">
        
        <table className="calendar">
          <thead>
            <tr>
              <th>ДШ</th>
              <th>ШШ</th>
              <th>ШР</th>
              <th>БШ</th>
              <th>ЖМ</th>
              <th>ИШ</th>
              <th>ЖШ</th>
            </tr>
          </thead>
          <tbody>
            {/* Günler için örnek hücreler */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td >17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td className="selected-day">20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
             
            </tr>
            {/* Diğer gün satırları burada devam edecek */}
          </tbody>
        </table>
      </div>
      {/* adress */}
      <div className="calendar-container">
      <header>
        <h3>Саат: 17:00</h3>
        
      </header>
     
      </div>
    </div>
  );
};

export default DateTime;
