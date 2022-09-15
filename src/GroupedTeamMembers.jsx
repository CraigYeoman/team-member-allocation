import {useState} from 'react';


const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedDate] = useState(groupTeamMembers());

    function groupTeamMembers() {
        const teams = [];

        const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        const teamA = {
            team: 'TeamA',
            members:teamAMembers, 
            collapsed: selectedTeam === 'TeamA' ? false:true
            };
            teams.push(teamA);

            const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
            const teamB = {
                team: 'TeamB',
                members:teamBMembers, 
                collapsed: selectedTeam === 'TeamB' ? false:true
                };
                teams.push(teamB);

            const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
            const teamC = {
                team: 'TeamC',
                members:teamCMembers, 
                collapsed: selectedTeam === 'TeamC' ? false:true
                };
                teams.push(teamC);

            const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
            const teamD = {
                team: 'TeamD',
                members:teamDMembers, 
                collapsed: selectedTeam === 'TeamD' ? false:true
                };
                teams.push(teamD);
}

        return (
            <footer className="container">
                <div className="row justify-content-center mt-3 mb-4">
                    <div className="col-8">
                        <h1> Grouped Team Members</h1>
                    </div>
                </div>
            </footer>
        )
    }
    
    export default  GroupedTeamMembers