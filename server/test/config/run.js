import Jasmine from 'jasmine'
import reporters from 'jasmine-reporters'

const jasmine = new Jasmine();

const terminalReporter = new reporters.TerminalReporter();
jasmine.loadConfigFile('server/test/config/jasmine.json')
jasmine.addReporter(terminalReporter);
jasmine.execute()
