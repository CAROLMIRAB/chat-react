import React from "react";

import Users from "./components/Users";
import SearchBox from "./components/SearchBox";
import MessageL from "./components/MessageL";
import MessageR from "./components/MessageR";

import "./styles/App.css";

const App = () => {
  return (
    <main className="react-chat">
      <div class="content-wrapper">
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card m-0">
              <div class="row no-gutters">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                  <div class="users-container">
                    <div class="chat-search-box">
                      <div class="input-group">
                        <SearchBox />
                      </div>
                    </div>
                    <ul class="users">
                      <Users
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                        name="Franklin Sanchez"
                        status="status busy"
                      />
                      <Users
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                        name="Carol Mirabal"
                        status="status offline"
                      />
                      <Users
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        name="Salma PorDonde"
                        status="status away"
                      />
                      <Users
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                        name="Porque Aja"
                        status="status online"
                      />
                    </ul>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                  <div class="selected-user">
                    <span>
                      To: <span class="name">Carol Mirabal</span>
                    </span>
                  </div>
                  <div class="chat-container">
                    <ul class="chat-box chatContainerScroll">
                      <MessageL
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                        name="Franklin"
                        position="chat-left"
                        text="Hola, este es un mensaje de prueba para el chat 1"
                        time="08:50"
                      />
                      <MessageR
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                        name="Carol"
                        position="chat-right"
                        text="Hola, este es un mensaje de prueba para el chat 2"
                        time="08:51"
                      />
                      <MessageL
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        name="Salma"
                        position="chat-left"
                        text="Hola, este es un mensaje de prueba para el chat 3"
                        time="08:52"
                      />
                      <MessageR
                        imgSource="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                        name="Porque"
                        position="chat-right"
                        text="Hola, este es un mensaje de prueba para el chat 4"
                        time="08:53"
                      />
                    </ul>
                    <div class="form-group mt-3 mb-0">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
