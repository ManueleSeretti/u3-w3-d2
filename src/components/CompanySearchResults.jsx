import { useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComAction, getJobsAction, setCompanysAction } from "../redux/action";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const params = useParams();
  const companys = useSelector((state) => state.companys.content);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Button
            onClick={() => {
              dispatch(addComAction(params.company));
            }}
            variant="success"
          >
            aggiungi azienda ai preferiti
          </Button>
          <Link to="/favourites">
            <Button className="ms-5" variant="success">
              Aziende Preferite
            </Button>
          </Link>
          <Link to="/">
            <Button className="ms-5" variant="success">
              Home
            </Button>
          </Link>
          {isLoading ? (
            <Spinner className="ms-5" animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            companys.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
