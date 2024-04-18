import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    flexDirection: "column",
    
    alignItems: "flex-start",
  },
  heading: {
    flex: 0.12,
    alignItems: "flex-start",
  },
  headingText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#C0A1DD"
  },
  headingLine: {
    width: 350,
    height: 2,
    backgroundColor: "#C0A1DD",
  },
  body: {
    flex: 0.53,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bodyText: {
    fontSize: 20,
    color: "#C0A1DD",
  },
  top: {
    flex: 0.9,
  },
  bottom: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0A1DD",
  },
  stack: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 45,
  },
  circleCard: {
    width: 150,
    height: 150,
    padding: 10,
  },
  circles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
