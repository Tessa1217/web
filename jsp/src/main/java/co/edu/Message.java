package co.edu;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Message {

	private int msgId;
	private String content;
	private String writer;
	private String createDate;

}
