package com.us.example.domain;

public class SysPassword {
    private String id;
    private String password;
    private String state;
    private String timestamp;

    public String getId( ) {
        return id;
    }

    public void setId(String id) {
        this.id=id;
    }

    public String getPassword( ) {
        return password;
    }

    public void setPassword(String password) {
        this.password=password;
    }

    public String getState( ) {
        return state;
    }

    public void setState(String state) {
        this.state=state;
    }

    public String getTimestamp( ) {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp=timestamp;
    }
}
