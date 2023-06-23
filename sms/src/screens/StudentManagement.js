import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllStudents } from './../Actions/studentActions';
import { studentProfile, assignSection } from './../Actions/studentActions';
import { getAllSections, addSection } from './../Actions/sectionActions';
import { getAllSubjects, assignSubject, getAllAssignedSubjects, deleteAssignedSubject } from './../Actions/subjectActions';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core'
import Profile from './Profile';
import { Dropdown } from 'primereact/dropdown';



export class StudentManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            section: {},
            subject: {},
            modal: false,
            modal2: false,
            newSection: ""
        };
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };

    componentDidMount() {
        this.props.getAllStudents()
        this.props.getAllSections()
        this.props.getAllSubjects()
        this.props.getAllAssignedSubjects()
    }

    onProfileView = (id) => {
        <Profile id="id" />
    }

    handleSectionDropdownChange = (id, value) => {
        const { section } = this.state;
        section[id] = value;
        this.setState({ section });
        console.log(section[id])
        this.props.assignSection(id, section[id].sectionName)
    };
    handleAssignSubjectChange = (id, value) => {
        const { subject } = this.state;
        subject[id] = value;
        this.setState({ subject });
        console.log(subject[id])
        this.props.assignSubject(id, subject[id].subjectName)
    };
    
    handleRemoveSubjectChange = (id, value) => {
        const { subject } = this.state;
        subject[id] = value;
        this.setState({ subject });
        console.log(id, subject[id].subjectName)
        this.props.deleteAssignedSubject(id, subject[id].subjectName)
    };

    onChange = (e) => {
        console.log('e.target.name', e.target.name)
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.addSection(this.state.newSection);


        this.setState({
            newSection: ""
        })
    }

    toggle = () => this.setState({ modal: !this.state.modal });

    toggle2 = () => this.setState({ modal2: !this.state.modal2 });

    render() {

        const { students } = this.props.student

        const { sections } = this.props.section

        const { subjects } = this.props.subject

        const { assignedSubjects } = this.props.assignedSubject

        
        // const sectionsWithAssignedSubjects = sections.reduce((result, section) => {
        //     const matchingAssignedSubjects = assignedSubjects.find(assignedSubject => assignedSubject.sectionId === section._id);
        //     const mergedValues = [{ ...section, ...matchingAssignedSubjects }];
        //     return [...result, ...mergedValues];
        //   }, []);

        const { value } = this.state;
        // const theme = useTheme();

        function TabPanel(props) {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`full-width-tabpanel-${index}`}
                    aria-labelledby={`full-width-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }

        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
        };

        function a11yProps(index) {
            return {
                id: `full-width-tab-${index}`,
                'aria-controls': `full-width-tabpanel-${index}`,
            };
        }

        const studentFirstName = (students) => {
            return students.firstName
        }
        const studentLastName = (students) => {
            return students.lastName
        }
        const assignedSection = (students) => {
            return students.section
        }
        const displayProfile = (students) => {
            return <Link href={`/profile`}> <Button onClick={this.onProfileView.bind(this, students._id)}> View Profile </Button> </Link>
        }
        const assignSection = (students) => {
            return <Dropdown value={this.state.section[students._id]}
                onChange={(e) => this.handleSectionDropdownChange(students._id, e.value)} options={sections} optionLabel="sectionName"
                placeholder="Select Section" className="w-full md:w-14rem" />
        }
        const sectionName = (sections) => {
            return sections.sectionName
        }
        const viewAssignedSubjects = (assignedSubjects) => {
            // while(sections._id === assignedSubjects.sectionId) {
                return assignedSubjects.subjectName
            
        }
        const assignSubject = (sections) => {
            return <Dropdown value={this.state.subject[sections._id]}
                onChange={(e) => this.handleAssignSubjectChange(sections._id, e.value)} options={subjects} optionLabel="subjectName"
                placeholder="Select Subject" className="w-full md:w-14rem" />
        }

        const removeSubject = (sections) => {
            return <Dropdown value={this.state.subject[sections._id]}
                onChange={(e) => this.handleRemoveSubjectChange(sections._id, e.value)} options={assignedSubjects.filter(assignedSubject => assignedSubject.sectionId === sections._id)} optionLabel="subjectName"
                placeholder="Select Subject" className="w-full md:w-14rem" />
        }

        return (
            <div className='flex  '>

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <div className='grow'>
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Student Management
                    </div>
                    <div className=''>
                        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                            <AppBar position="static">
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="All Students" {...a11yProps(0)} />
                                    <Tab label="Assign Section" {...a11yProps(1)} />
                                    <Tab label="Assign Subjects" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                //   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} >

                                    <div className="card">
                                        <DataTable value={students} tableStyle={{ minWidth: '50rem' }}>
                                            <Column field="firstName" header="First Name" sortable body={studentFirstName} style={{ width: '25%' }}></Column>
                                            <Column field="lastName" header="Last Name" sortable body={studentLastName} style={{ width: '25%' }}></Column>
                                            <Column field="profile" header="Profile" sortable body={displayProfile} style={{ width: '25%' }}></Column>
                                        </DataTable>
                                    </div>

                                </TabPanel>
                                <TabPanel value={value} index={1} >

                                    <div className="card">
                                        <DataTable value={students} tableStyle={{ minWidth: '50rem' }}>
                                            <Column field="firstName" header="First Name" sortable body={studentFirstName} style={{ width: '25%' }}></Column>
                                            <Column field="lastName" header="Last Name" sortable body={studentLastName} style={{ width: '25%' }}></Column>
                                            <Column field="assignedSection" header="Assigned Section" sortable body={assignedSection} style={{ width: '25%' }}></Column>
                                            <Column field="section" header="Section" sortable body={assignSection} style={{ width: '25%' }}></Column>
                                        </DataTable>
                                    </div>
                                    <div className='text-right my-2 mx-8 ' >
                                        <Button color="primary" onClick={this.toggle}> Add New Section </Button>
                                    </div>

                                </TabPanel>
                                <TabPanel value={value} index={2} >

                                    <div className="card">
                                        <DataTable value={sections} tableStyle={{ minWidth: '50rem' }}>
                                            <Column field="Section" header="Section" sortable body={sectionName} style={{ width: '25%' }}></Column>
                                            <Column field="assignedSubjects" header="Assigned Subjects" sortable body={viewAssignedSubjects} style={{ width: '25%' }}></Column>
                                            <Column field="assignSubject" header="Assign Subject" sortable body={assignSubject} style={{ width: '25%' }}></Column>
                                            <Column field="removeSubject" header="Remove Subject" sortable body={removeSubject} style={{ width: '25%' }}></Column>
                                        </DataTable>
                                    </div>

                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </div>


                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        backdrop={"static"}
                    >
                        <ModalHeader toggle={this.toggle}> Add New Section </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for='newSection'> Section Name </Label>
                                    <Input
                                        type="text"
                                        name="newSection"
                                        id="newSection"
                                        placeholder="Section"
                                        className="mb-3"
                                        onChange={this.onChange}
                                    />
                                    <Button type="submit" color="dark" style={{ marginTop: '2rem' }} block>
                                        Add
                                    </Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>

                    <Modal
                        isOpen={this.state.modal2}
                        toggle={this.toggle2}
                        backdrop={"static"}
                    >
                        <ModalHeader toggle={this.toggle2}> Add New Section </ModalHeader>
                        <ModalBody>
                            Section Added Successfully!
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>



                </div>
            </div>
        )
    }
}

StudentManagement.propTypes = {
    getAllStudents: PropTypes.func.isRequired,
    studentProfile: PropTypes.func.isRequired,
    getAllSections: PropTypes.func.isRequired,
    assignSection: PropTypes.func.isRequired,
    addSection: PropTypes.func.isRequired,
    getAllSubjects: PropTypes.func.isRequired,
    assignSubject: PropTypes.func.isRequired,
    getAllAssignedSubjects: PropTypes.func.isRequired,
    deleteAssignedSubject: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired,
    section: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    student: state.student,
    section: state.section,
    subject: state.subject,
    assignedSubject: state.assignedSubject
})

export default connect(mapStateToProps, { getAllStudents, studentProfile, getAllSections, assignSection, assignSubject,
    addSection, getAllSubjects, getAllAssignedSubjects, deleteAssignedSubject })(StudentManagement)