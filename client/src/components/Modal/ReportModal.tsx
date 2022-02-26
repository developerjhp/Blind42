import { PageName, Squares, TopBar } from 'styles/styled';
import { ModalBackdrop, ReportModalContainer, ContentContainer, Instruction, ReportBox, ListName, ReportList, Buttons } from './styled';

type Props = {
	clickModalHandler: () => void;
};

export default function ReportModal (/*{ clickModalHandler }: Props*/) {

	const reportHandler = () => {
		
	}

	const issueCountHandler = () => {
		
	}

	return (
		<>
			<ModalBackdrop /*onClick={clickModalHandler}*/>
				<ReportModalContainer onClick={(e) => e.stopPropagation()}>
					<TopBar>
						<PageName>신고하기</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<div /*onClick={clickModalHandler}*/>&times;</div>
						</Squares>
					</TopBar>
					<ContentContainer>
						<Instruction>
							<div>신고는 반대 의견을 표시하는 기능이 아닙니다.</div>
							<div>허위신고일 경우, 서비스 이용이 제한될 수 있으니 신중하게 신고해주세요.</div>
						</Instruction>
						<ReportBox>
							<ListName>신고사유</ListName>
							<ReportList>
								<form>
									<div><input type="checkbox" onClick={issueCountHandler} name="issue" />욕설/폭력/혐오/차별적 표현입니다.</div>
									<div><input type="checkbox" name="issue" />명예훼손/사칭/사생활침해 게시물입니다.</div>
									<div><input type="checkbox" name="issue" />개인정보 노출 게시물입니다.</div>
									<div><input type="checkbox" name="issue" />음란물입니다.</div>
									<div><input type="checkbox" name="issue" />불법정보를 포함하고 있습니다.</div>
									<div><input type="checkbox" name="issue" />스팸홍보/도배글입니다.</div>
									<div><input type="checkbox" name="issue" />지나친 분란을 유도합니다.</div>
									<div><input type="checkbox" name="issue" />기타</div>
								</form>
							</ReportList>	
						</ReportBox>
						<Buttons>
							<form >
								<input type="button" onClick={reportHandler} value="신고" />
							</form>
						</Buttons>
					</ContentContainer>
				</ReportModalContainer>
			</ModalBackdrop>
		</>
	);
}